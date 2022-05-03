import { UserWord, Quiz } from "../db";

class userWordService{
    static async addOrUpdateUserWord({ userId, word }){
        const userWord = await UserWord.findByUserId({ userId });
        
        if(userWord){ //userWord가 이미 존재하면 업데이트
            const quiz = await Quiz.findByWord({ word });
            if(quiz === null){
                const errorMessage = "퀴즈 DB에 해당 단어가 존재하지 않습니다";
                return { errorMessage };
            }
            const toUpdate = { word };
            const updatedUserWord = await UserWord.update({ userId, toUpdate });
            
            return updatedUserWord;
        } else { //userWord가 없으면 처음이니 생성
            const newUserWord = { userId, word };
            const createdNewUserWord = await UserWord.create({ newUserWord });
            
            return createdNewUserWord;
        }   

    }

    static async getUserWord({ userId }){
        const userWord = UserWord.findByUserId({ userId });
        if(!userWord){
            const errorMessage = "해당 유저의 단어가 존재하지 않습니다";
            return { errorMessage };
        }
        return userWord;
    }
}

export { userWordService };