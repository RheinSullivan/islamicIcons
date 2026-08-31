declare module '@angular/core' {
	export function Component(options: any): ClassDecorator;
	export function Input(): PropertyDecorator;
	export function NgModule(options: any): ClassDecorator;
	export class EventEmitter<T> {
		emit(value?: T): void;
		subscribe(generatorOrNext?: any, error?: any, complete?: any): any;
	}
}
