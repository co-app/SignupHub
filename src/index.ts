import { GoogleLogin } from "./google";
import { LoginTags } from "./login.interface";
import { KakaoLogin } from "./kakao";
import { NaverLogin } from "./naver";

export class LoginHub<P, R> {

    constructor(tag: LoginTags) {

        switch (tag) {
            case 'google':
                return new GoogleLogin<P, R>()

            case 'kakao':
                return new KakaoLogin<P, R>()

            case 'naver':
                return new NaverLogin<P, R>()

            default:
                throw new Error(`${tag} is support`)
        }
    }
}


