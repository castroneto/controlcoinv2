import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class Encryption {

    public salts = 10;
    
    async EncryptPassword(password) {
        const hash = await bcrypt.hash(password, this.salts);

    }

    async CompareHashes(password, hash) {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch
    }
 
}