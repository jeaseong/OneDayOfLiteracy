import { User } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config";

class userAuthService {
  // 유저 추가(회원 가입)
  static async addUser({ email, password, nickname }) {
    // 이메일 중복 확인
    const user = await User.findByEmail({ email });
    if (user) {
      const errorMessage =
        "이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.";
      return { errorMessage };
    }

    // 비밀번호 해쉬화
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { email, password: hashedPassword, nickname };

    // db에 저장
    const createdNewUser = await User.create({ newUser });
    createdNewUser.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.

    return createdNewUser;
  }

  // 로그인
  static async getUser({ email, password }) {
    // 이메일 db에 존재 여부 확인
    let user = await User.findByEmail({ email });
    if (!user) {
      const errorMessage =
        "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    user = await User.findById({ userId: user._id })
    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash
    );
    if (!isPasswordCorrect) {
      const errorMessage =
        "비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const secretKey = config.jwtKey || "jwt-secret-key";
    const token = jwt.sign({ userId: user._id }, secretKey);
    
    const loginUser = {
      ...user._doc,
      token,
      errorMessage: null,
    };

    return loginUser;
  }

  // 유저 조회
  static async getUserInfo({ userId }) {
    const user = await User.findById({ userId });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage =
        "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return user;
  }

  // 전체 유저 조회
  static async getUsers() {
    const users = await User.findAll();
    return users;
  }

  // 유저 정보 수정
  static async setUser({ userId, toUpdate }) {
    // 우선 해당 id 의 유저가 db에 존재하는지 여부 확인
    let user = await User.findById({ userId });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage = "가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    
    // 변경 사항에 password 있을 시 암호화 해서 저장
    if (toUpdate.password) {
      toUpdate["password"] = await bcrypt.hash(toUpdate.password, 10);
    }

    // 수정해야하는 필드에 맞는 값을 업데이트
    const toUpdateField = Object.keys(toUpdate);

    toUpdateField.forEach(key => {
      if (!toUpdate[key]) delete toUpdate[key];
    });

    user = await User.update({ userId, toUpdate });
    return user;
  }

  // 유저 삭제 (회원 탈퇴)
  static async deleteUser({ userId }) {
    // 해당 유저 삭제
    const deletedUser = await User.delete({ userId });
    return deletedUser;
  }

}

export { userAuthService };
