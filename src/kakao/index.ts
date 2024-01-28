import { Impl } from "@src/login.interface";

export class KakaoLogin<P, R> implements Impl.ILogin<P, R> {
    login(params: P): R {
        throw new Error("Method not implemented.");
    }
    logout(params: P): R {
        throw new Error("Method not implemented.");
    }
    join(params: P): R {
        throw new Error("Method not implemented.");
    }
}