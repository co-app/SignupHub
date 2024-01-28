export type LoginTags = "kakao" | "naver" | "google"

export namespace Params {
    export interface LoginParams {
        tag: LoginTags
    }

    /**
     * naver
     */
    export interface NaverLoginParmas extends LoginParams {
        tag: "naver"
    }

    /**
     * kakao
     */
    export interface KakaoLoginParmas extends LoginParams {
        tag: "kakao"
    }

    /**
     * Google
     */
    export interface GoogleLoginParmas extends LoginParams {
        tag: "google"
    }
}

export namespace Impl {
    export interface ILogin<P, R> {
        login(params: P): R
        logout(params: P): R
        join(params: P): R
    }
}
