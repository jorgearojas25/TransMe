import Observer from "./Observer"

export default abstract class Subject
{
    protected observers: Observer[]

    public constructor()
    {
        this.observers = []
    }

    public attach(observer: Observer): this
    {
        this.observers.push(observer)
        return this
    }
    public detach(observer: Observer): this
    {
        this.observers = this.observers.filter(item => item !== observer)
        return this
    }
    public notify(data: any): this
    {
        this.observers.forEach(observer => observer.update(data))
        return this
    }
}
