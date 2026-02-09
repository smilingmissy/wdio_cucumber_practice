import { browser } from '@wdio/globals'

export default class Page {
    /**
    * @param path path of page 
    */
    public open (path: string) {
        return browser.url(`https://practice.expandtesting.com/${path}`)
    }
}
