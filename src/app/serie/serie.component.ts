import { Component, OnInit } from '@angular/core';
import { PLATFORM_BROWSER_ID } from '@angular/common/src/platform_id';
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  numero1: number = 0; //x
  presicion: number = 0;  //n
  arriba: number;
  usoDoble: number;
  resultado: number = 0.0;
  factorial: number = 1;
  multi: number = 1;
  respuesta: string = '';
  numBer: number[] = [1, -0.5, 1/6, 0, -1/30, 0, 1/42, 0, -1/30, 0, 5/66, 0, -691/2730, 0, 7/6, 0, -3617/510, 0, 43867/798, 0, -174611/330];
  euler: number[] = [1, 0, -1, 0, 5, 0, -61, 0, 13850, 0, -505210];

  constructor() { 
    this.numero1 = null;
    this.presicion = null;
  }

  public serieSeno() {
    this.resultado = 0;
   for (let n = 0; n <= this.presicion; n++) {  
      this.resultado += (this.menosUnoElevado(n) * this.multiply(this.numero1, (2 * n + 1)) / this.facto(2 * n + 1));
    }
      this.respuesta = "";
      this.respuesta = this.resultado + "";
      this.limpiar();
    }
  public menosUnoElevado(exponente) {
    if(exponente % 2 == 0){
      this.arriba = 1;
    }else{
      this.arriba = -1;
    }
    return this.arriba;
  }

  public facto(limite) {
    this.factorial = 1;
    for (let index = 1; index <= limite; index++) {
      this.factorial *= index;
    }
    return this.factorial;
  }

  public multiply(base, exponente) {
    this.multi = 1;
    for (let index = 1; index <= exponente ; index++) {
      this.multi *= base;
    }
    return this.multi;
  }

  public serieCoseno() {
    this.resultado = 0;
    for (let n = 0; n <= this.presicion; n++) {
      this.resultado += ((this.menosUnoElevado(n) * this.multiply(this.numero1, (2 * n))) / this.facto(2 * n));
    }
    this.respuesta = "";
    this.respuesta = this.resultado + "";
    this.limpiar();
  }

  public serieTangente(){
    if( Math.abs(this.numero1) > Math.PI/2 || this.presicion > 10){
      this.respuesta = "";
      this.respuesta = "Dato fuera de Rango";
      this.limpiar();
    }
    else{
      this.resultado = 0;
      for (let n = 0; n <= this.presicion; n++) {
        this.resultado += ((this.numBer[2 * n] * Math.pow(-4,n) * (1-Math.pow(4,n))) * (this.multiply(this.numero1,2 * n-1)) / this.facto(2 * n));
      }
     this.respuesta = "";
     this.respuesta = this.resultado + "";
     this.limpiar();
  }
}

public serieSecante(){
  if(Math.abs(this.numero1) > Math.PI/2){
    this.respuesta = "";
    this.respuesta = "Dato fuera de Rango";
    this.limpiar();
  }else{
    this.resultado = 0;
    for (let n = 0; n <= this.presicion; n++) {
      this.resultado += (this.euler[n] * Math.pow(this.numero1, 2 * n)) / this.facto(2 * n);
    }
    this.respuesta = this.resultado + "";
    this.limpiar();
  }
}

public serieCosecante() {
  if (Math.abs(this.numero1) > 0 && Math.abs(this.numero1) < Math.PI && this.presicion <= 10){
    for (let n = 1; n <= this.presicion; n++) {
      this.resultado += (( 2 * ((Math.pow(2, 2 * n - 1)) - 1)) * (this.euler[n] * Math.pow(this.numero1, 2 * n - 1))) / this.facto(2 * n);    
    }
    this.respuesta = this.resultado + "";
    this.limpiar();
  }else{
    this.respuesta = "";
    this.respuesta = "Nel mano jaja";
    this.limpiar();
  }
}

public serieArcSin(){
  for (let n = 0; n <= this.presicion; n++) {
    this.arriba = this.facto(n);
    this.resultado += (this.facto(2 * n) * Math.pow(this.numero1, 2 * n + 1)) / (Math.pow(4, n) * Math.pow(this.arriba, 2) * (2 * n + 1));
  }
    this.respuesta = "";
    this.respuesta = this.resultado + "";
    this.limpiar();
}

public serieArcTan(){
  for (let n = 0; n <= this.presicion; n++) {
    this.resultado += ((this.menosUnoElevado(n)) * Math.pow(this.numero1, 2 * n + 1)) / (2 * n + 1);
  }
  this.respuesta = "";
  this.respuesta = this.resultado + "";
  this.limpiar();
}

public serieWo(){
  this.resultado = 0;
  if(this.numero1 < 0){
    this.numero1 *= -1;
  }
  for (let n = 1; n <= this.presicion; n++) {
    this.resultado += Math.pow(n * -1, n - 1) * this.multiply(this.numero1, n) / this.facto(n);
  }
    this.respuesta = "";
    this.respuesta = this.resultado + "";
    this.limpiar();
  }

  public serieSinH() {
    for (let n = 0; n <= this.presicion; n++) {
      this.resultado += (1 * Math.pow(this.numero1, 2 * n + 1)) / this.facto(2 * n + 1);
    }
    this.respuesta = "";
    this.respuesta = this.resultado + "";
    this.limpiar();
  }

  public serieCosH(){
    for (let n = 0; n <=  this.presicion; n++) {
      this.resultado += ((1) * Math.pow(this.numero1,2 * n)) / (this.facto(2 * n));
    }
    this.respuesta = "";
    this.respuesta = this.resultado + "";
    this.limpiar();
  }

  public serieTanH() {
    if (Math.abs(this.numero1) < Math.PI/2 && this.presicion <= 10){
      for (let n = 0; n <= this.presicion; n++) {
        this.resultado += (this.numBer[2 * n] * Math.pow(4, n) * (Math.pow(4, n) - 1) * Math.pow(this.numero1, 2 * n - 1)) / this.facto(2 * n);
      }
      this.respuesta = "";
      this.respuesta = this.resultado + "";
      this.limpiar();  
    }else{
      this.respuesta = "";
      this.respuesta = "Nel mano jaja";
      this.limpiar();  
    }
  }

  public serieSinH1(){
  for (let n = 0; n <=  this.presicion; n++) {
    this.multi = this.facto(n);
    this.resultado += (this.menosUnoElevado(n) * this.facto(2 * n) * Math.pow(this.numero1, 2 * n + 1)) / (Math.pow(4,n) * Math.pow(this.multi,2) * (2 * n + 1));
  }
    this.respuesta = "";
    this.respuesta = this.resultado + "";
    this.limpiar();
  }

  public serieTanH1(){
    if (Math.abs(this.numero1) < 1){
      for (let n = 0; n <= this.presicion; n++) {
        this.resultado += (1 * Math.pow(this.numero1, 2 * n + 1)) / (2 * n + 1);
      }
      this.respuesta = "";
      this.respuesta = this.resultado + "";
      this.limpiar();  
    }else{
      this.respuesta = "";
      this.respuesta = "Nel mano jaja";
      this.limpiar();  
    }
  }

  public serieExp(){
    this.resultado = 0;
    for (let n = 0; n <= this.presicion; n++) {
      this.resultado += Math.pow(this.numero1, n) / this.facto(n);
    }
    this.respuesta = "";
    this.respuesta = this.resultado + "";
    this.limpiar();  
  }

  public serieLn1(){
    if(Math.abs(this.numero1) >= 1){
      this.respuesta = "X fuera de rango";
      this.limpiar();  
    }else{
      this.resultado = 0;
      for (let n = 1; n <= this.presicion; n++) {
        this.resultado += ( this.menosUnoElevado(n + 1) * Math.pow(this.numero1, n) ) / n;
      }
      this.respuesta = this.resultado + "";
      this.limpiar();
    }
  }

  public serieLn(){
    this.resultado = 0;
    this.multi = 0;
    this.arriba = 0;
    for (let n = 0; n <= this.presicion; n++) {
      this.arriba = this.numero1 - 1;
      this.multi = this.arriba + 2;
      this.resultado += (1 / ((2 * n) + 1)) * Math.pow((this.arriba / this.multi), 2 * n + 1);
    }
    this.respuesta = (2 * this.resultado) + "";
    this.limpiar();
  }

  public limpiar(){
    this.arriba = 0;
    this.numero1 = null;
    this.presicion = null;
    this.usoDoble = 0;
    this.resultado = 0.0;
    this.factorial = 1;
    this.multi = 1;
    this.resultado = 0.0;
  }
  ngOnInit() {
  }
}