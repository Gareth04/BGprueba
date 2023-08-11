import {Injectable} from '@angular/core'
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { RESTAutor } from '../interfaces/autor.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorito } from '../interfaces/favoritos.interface';
import { AuthGuard } from 'src/app/guards/auth-guard.guard';
import { environment } from 'src/environments/environment.development';
import { Product } from '../interfaces/product.interface';

@Injectable({ 
    providedIn:'root'
})
export class autorService{
    private apiUrls = environment.apiUrl;
    private autor! : RESTAutor;
    private saveAutor: RESTAutor[] = [];
    fav: Favorito[] = []; 
    favObj!: Favorito;
    private Islogged: boolean = false;
    constructor(private autGuard:AuthGuard, private http: HttpClient){}
    // login(email:string,psswd:string){//Método de logeo

    //     if(email === "admin" && psswd === "admin"){
    //         localStorage.setItem("token","(2u=v3kL9u2PH$936=gdgk@PZ{j6wnag5@hbHYdwn!nf!-cK-A");//Token de entrada
    //         this.Islogged = true;
    //         alert("Bienvenido")
    //     }else{
    //         alert("Correo o contraseña incorrecto")
    //     }
    // }
    login(email: string, password: string): Observable<any> {
        const url = `${this.apiUrls}/Usuarios/login`;
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
    
        return this.http.post(url, formData);
      }
      getProducts(): Observable<Product[]> {
        const url = `${this.apiUrls}/Producto`; // Ajusta la ruta según tu API
        return this.http.get<Product[]>(url);
      }



    
}