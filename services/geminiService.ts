import { GoogleGenAI } from "@google/genai";
import { PERFUMES } from "../constants";

const getGeminiClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.error("API_KEY is not defined");
        return null;
    }
    return new GoogleGenAI({ apiKey });
};

export const getPerfumeRecommendation = async (userPreferences: string): Promise<string> => {
    const ai = getGeminiClient();
    if (!ai) return "Вибачте, сервіс тимчасово недоступний. Будь ласка, напишіть нам в Instagram.";

    const availablePerfumes = PERFUMES.map(p => `${p.brand} ${p.name} (Ноти: ${p.notes.join(', ')})`).join('; ');

    const prompt = `
        Ти - експертний консультант з нішевої парфумерії магазину "Rozpyvmania".
        Твоя ціль - допомогти клієнту обрати аромат з нашого асортименту або порадити стиль аромату, якщо в нас такого немає.
        
        Наш асортимент:
        ${availablePerfumes}

        Запит клієнта: "${userPreferences}"

        Дай коротку, але красиву та емоційну відповідь українською мовою. 
        Якщо в нашому списку є щось схоже, обов'язково порадь це (максимум 2 варіанти).
        В кінці відповіді завжди закликай написати в Instagram для замовлення або детальної консультації.
        Не пиши ціни.
        Використовуй емодзі.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
        });
        return response.text || "Спробуйте ще раз, або напишіть нам в Instagram для живої консультації!";
    } catch (error) {
        console.error("Gemini Error:", error);
        return "Виникла помилка. Будь ласка, перейдіть в Instagram для консультації з менеджером.";
    }
};