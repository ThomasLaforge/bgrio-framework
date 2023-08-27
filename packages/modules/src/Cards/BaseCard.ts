export abstract class BaseCard<T> {

    abstract isEqual(card: BaseCard<T>): boolean

}