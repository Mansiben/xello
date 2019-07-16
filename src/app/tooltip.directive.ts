import { Component, Input, Renderer2, HostListener,  Directive, ElementRef, 
    TemplateRef, ViewContainerRef,  ContentChild, ComponentRef, ViewChild } from 
    '@angular/core';

    
    @Directive({ selector: '[tooltipDirective]' })
    export class TooltipDirective {

      private tooltipId: string;
    
      // @ViewChild('tooltip2') private tooltip2: ElementRef;
      
      constructor(
          private renderer: Renderer2,
          private elementRef: ElementRef,
          private viewContainerRef1: ViewContainerRef) { }
    
      @Input() parametroPlantilla: TemplateRef<any>;
 
    
      @ContentChild('tooltipTemplate1') private tooltipTemplateRef1: TemplateRef<Object>;
     
    
    
      @HostListener('window:click' , ['$event.target']) 
      onclick(){

      
         
            const view = this.viewContainerRef1.createEmbeddedView(this.tooltipTemplateRef1);
            view.rootNodes.forEach(node => 
                          this.renderer.appendChild(this.elementRef.nativeElement,node));
        
  
      }

       
     
    }

    @Directive({ selector: '[tooltipDirective2]' })
    export class TooltipDirective2 {

      @ViewChild('tooltip1') private tooltip1: ElementRef;

      constructor(
        private renderer: Renderer2,
        private elementRef: ElementRef,
        private viewContainerRef: ViewContainerRef) { }


      @ContentChild('tooltipTemplate2') private tooltipTemplateRef2: TemplateRef<object>;

      @HostListener('window:click' , ['$event.target']) 
      onclick(){

            const view = this.viewContainerRef.createEmbeddedView(this.tooltipTemplateRef2);
            view.rootNodes.forEach(node => 
                          this.renderer.appendChild(this.elementRef.nativeElement,node));
        
  
      }
    }
    