import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column({ select: false})
    google_id: string;
    @Column()
    name?: string;
    @Column()
    email?: string;
    @Column()
    familyName?: string;
    @Column({ default: false })
    isConnected?: boolean;
}
