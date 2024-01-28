import { Impl } from "@src/login.interface";

export class NaverLogin<P, R> implements Impl.ILogin<P, R> {

    constructor() {

    }
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