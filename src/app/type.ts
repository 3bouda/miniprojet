export class Type
{
    public get photo(): string {
    return this._photo;
    }

    public set photo(value: string) {
    this._photo = value;
    }    

    public get titre(): string {
    return this._titre;
    }

    public set titre(value: string) {
    this._titre = value;
    }

    public get prix(): number {
    return this._prix;
    }

    public set prix(value: number) {
    this._prix = value;
    }

    public get id(): number {
    return this._id;
    }

    public set id(value: number) {
    this._id = value;
    }
    public get categorie(): string {
        return this._categorie;
        }
    
        public set categorie(value: string) {
        this._categorie = value;
        }
    constructor(private _titre:string, private _photo: string, private _prix: number,private _id:number,private _categorie:string) 
    {
    }
}
