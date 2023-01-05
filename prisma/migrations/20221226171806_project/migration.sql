-- AlterTable
ALTER TABLE `project` MODIFY `content` TEXT NOT NULL,
    MODIFY `created` VARCHAR(191) NOT NULL,
    MODIFY `frontend` TEXT NOT NULL,
    MODIFY `backend` TEXT NOT NULL;
