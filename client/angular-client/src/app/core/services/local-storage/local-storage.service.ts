import { Injectable } from '@angular/core';

/**
 * Sercice that wraps the localStorage object
 */

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  /**
   * Set a item in the localStorage
   * @param key
   * @param value
   */
  setItem(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  /**
   * Get a item with the key passed from the localStorage
   * @param key
   */
  getItem(key: string): any {
    return localStorage.getItem(key);
  }

  /**
   * Remove a item that has the key passed from the localStorage
   * @param key
   */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Remove all the key-value pairs from the localStorage
   */
  clear(): void {
    localStorage.clear();
  }
}
