-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `created` DATETIME(3) NOT NULL,
    `frontend` VARCHAR(191) NOT NULL,
    `backend` VARCHAR(191) NOT NULL,
    `image_1` VARCHAR(191) NOT NULL,
    `image_2` VARCHAR(191) NOT NULL,
    `image_3` VARCHAR(191) NOT NULL,
    `image_4` VARCHAR(191) NOT NULL,
    `url_live` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `integration` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
