import {AuthEffect} from './auth.effect';
import {RouterEffects} from './router.effects';

export const effects: any[] = [AuthEffect, RouterEffects];

export * from './auth.effect';
export * from './router.effects';
