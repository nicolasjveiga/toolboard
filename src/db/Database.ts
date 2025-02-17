export default class Database<T> {
    private items: T[] = [];

    public getAll(): T[]{
        return this.items
    }

    public add(item: T): void;
    public add(items:T[]): void;

    public add(itemOrItems: T | T[]): void{
        if(Array.isArray(itemOrItems)){
            this.items.push(...itemOrItems);
        } else {
            this.items.push(itemOrItems);
        }
            
    }

    public removeAt(index:number): void {
        if(index >= 0 && index < this.items.length){
            this.items.splice(index, 1);
        } else {
            console.log("Indíce inválido para remoção.");
        }
    }

}