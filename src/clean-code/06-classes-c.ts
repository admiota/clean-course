
(() => {

    //Aplicando el proncipio de responsabilidad unica
    //Priorizar la composición frente a la herencia

    /********PERSONA**********/
    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string,
        gender: Gender,
        birthdate:Date
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    /********USER**********/
    interface UserProps {
        email   : string,
        role    : string
    }

    class User {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({ email, role }: UserProps) {            
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


    /********SETTINGS**********/
    interface SettingsProps {
        workingDirectory: string,
        lastOpenFolder: string
    }

     class Settings{
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({workingDirectory, lastOpenFolder}:SettingsProps){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }



    /*******PUESTA EN MARCHA********/
    
    interface UserSettingsProps {
        name: string,
        gender: Gender,
        birthdate: Date,
        email   : string,
        role: string,
        workingDirectory: string,
        lastOpenFolder: string
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({ name, gender, birthdate, email, role, workingDirectory,lastOpenFolder }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });
        }
     }
    
     const userSettings = new UserSettings(
         {
            name: 'Fernando',
            gender: 'M',
            birthdate: new Date('2010-10-21'),
            email   : 'email@gmail.com',
            role: 'Admin',
            workingDirectory: '/usr/home',
            lastOpenFolder: '/home'
         }
     );

     console.log({userSettings: userSettings});

})();

