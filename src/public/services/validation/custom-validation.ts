import { ISub } from '../../../public/Interfaces/projects';

export const validator = (obj: any) => {
    let errors: string[] = [];
    Object.keys(obj).forEach((item:string) => {
        switch (item) {
            case 'email': {
                const check = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (obj[item].length === 0){
                    errors.push(`${item} is empty`);
                } else {
                    if (!check.test(obj[item])){
                        errors.push(`${item} is inValid`);
                    }
                }
                break;
            };
            case 'name': {
                if (obj[item] === ''){
                    errors.push(`${item} is empty`);
                }
                break;
            }
            case 'hash': {
                if (obj[item] === ''){
                    errors.push(`password is empty`);
                }
                break;
            };
            case 'hashConfirm': {
                if (obj[item] !== obj['hash']) {
                    errors.push('passwords do not match');
                }
                break;
            }
        }
    });

    return errors;
};
