import { Module } from '@nestjs/common';

import { PurchasesController } from './controllers/purchases.controller';

import { DatabaseModule } from '../database/database.module';

import { CoursesService } from '../services/courses.service';
import { EnrollmentsService } from '../services/enrollments.service';
import { StudentsService } from '../services/students.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchasesController],
  providers: [
    /// Services
    StudentsService,
    EnrollmentsService,
    CoursesService,
  ],
})
export class MessagingModule {}
