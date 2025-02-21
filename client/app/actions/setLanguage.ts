'use server';

import { cookies } from "next/headers";


const setLanguage = (locale:string = 'vi') => {
    cookies().set("locale", locale);
}

export default setLanguage