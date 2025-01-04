import { createListenerMiddleware, addListener } from '@reduxjs/toolkit';
import { addPostsListeners } from '@/features/posts/postsSlice'; // Используется slice для добавления слушателей

export const listenerMiddleware = createListenerMiddleware();

export const startAppListening = listenerMiddleware.startListening;

export const addAppListener = addListener;

addPostsListeners(startAppListening);
