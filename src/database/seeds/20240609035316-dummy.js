"use strict";

const {
  user,
  kelas,
  mode_pembelajaran,
  mata_pelajaran,
  bab,
  sub_bab,
  material,
  user_progress,
} = require("../../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} _Sequelize
   */
  async up(queryInterface, _Sequelize) {
    await user_progress.destroy({ truncate: true });
    await material.destroy({ truncate: true });
    await sub_bab.destroy({ truncate: true });
    await bab.destroy({ truncate: true });
    await mata_pelajaran.destroy({ truncate: true });
    await mode_pembelajaran.destroy({ truncate: true });
    await kelas.destroy({ truncate: true });
    await user.destroy({ truncate: true });

    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        name: "John",
        email: "jhon@example.com",
        password:
          "$2a$12$.HOb8SlLxGN4usHDihNaQe6IFDodXO09pO6Nfi.M96XzcTJ9F1HDu", // Qwerty123
      },
      {
        id: 2,
        name: "Doe",
        email: "doe@example.com",
        password:
          "$2a$12$.HOb8SlLxGN4usHDihNaQe6IFDodXO09pO6Nfi.M96XzcTJ9F1HDu", // Qwerty123
      },
      {
        id: 3,
        name: "Faza",
        email: "faza@example.com",
        password:
          "$2a$12$.HOb8SlLxGN4usHDihNaQe6IFDodXO09pO6Nfi.M96XzcTJ9F1HDu", // Qwerty123
      },
      {
        id: 4,
        name: "Dandy",
        email: "dandy@example.com",
        password:
          "$2a$12$.HOb8SlLxGN4usHDihNaQe6IFDodXO09pO6Nfi.M96XzcTJ9F1HDu", // Qwerty123
      },
    ]);
    await queryInterface.bulkInsert("kelas", [
      { id: 1, name: "Kelas 1" },
      { id: 2, name: "Kelas 2" },
      { id: 3, name: "Kelas 3" },
    ]);
    await queryInterface.bulkInsert("mode_pembelajarans", [
      { id: 1, name: "Tematik", kelas_id: 1 },
      { id: 2, name: "Topik", kelas_id: 1 },
      { id: 3, name: "Tematik", kelas_id: 2 },
      { id: 4, name: "Topik", kelas_id: 2 },
      { id: 5, name: "Tematik", kelas_id: 3 },
      { id: 6, name: "Topik", kelas_id: 3 },
    ]);
    await queryInterface.bulkInsert("mata_pelajarans", [
      { id: 1, name: "Matematika", mode_pembelajaran_id: 1 },
      { id: 2, name: "Fisika", mode_pembelajaran_id: 1 },
      { id: 3, name: "Bahasa Indonesia", mode_pembelajaran_id: 2 },
      { id: 4, name: "Bahasa Inggris", mode_pembelajaran_id: 2 },
      { id: 5, name: "Kimia", mode_pembelajaran_id: 3 },
      { id: 6, name: "Biologi", mode_pembelajaran_id: 3 },
    ]);
    await queryInterface.bulkInsert("babs", [
      { id: 1, name: "BAB 1", mata_pelajaran_id: 1 },
      { id: 2, name: "BAB 2", mata_pelajaran_id: 1 },
      { id: 3, name: "BAB 1", mata_pelajaran_id: 2 },
      { id: 4, name: "BAB 2", mata_pelajaran_id: 2 },
      { id: 5, name: "BAB 1", mata_pelajaran_id: 3 },
      { id: 6, name: "BAB 2", mata_pelajaran_id: 3 },
      { id: 7, name: "BAB 1", mata_pelajaran_id: 4 },
      { id: 8, name: "BAB 2", mata_pelajaran_id: 4 },
      { id: 9, name: "BAB 1", mata_pelajaran_id: 5 },
      { id: 10, name: "BAB 2", mata_pelajaran_id: 5 },
      { id: 11, name: "BAB 1", mata_pelajaran_id: 6 },
      { id: 12, name: "BAB 2", mata_pelajaran_id: 6 },
      { id: 13, name: "BAB 1", mata_pelajaran_id: 7 },
      { id: 14, name: "BAB 2", mata_pelajaran_id: 7 },
      { id: 15, name: "BAB 1", mata_pelajaran_id: 8 },
      { id: 16, name: "BAB 2", mata_pelajaran_id: 8 },
      { id: 17, name: "BAB 1", mata_pelajaran_id: 9 },
      { id: 18, name: "BAB 2", mata_pelajaran_id: 9 },
      { id: 19, name: "BAB 1", mata_pelajaran_id: 10 },
      { id: 20, name: "BAB 2", mata_pelajaran_id: 10 },
      { id: 21, name: "BAB 1", mata_pelajaran_id: 11 },
      { id: 22, name: "BAB 2", mata_pelajaran_id: 11 },
      { id: 23, name: "BAB 1", mata_pelajaran_id: 12 },
      { id: 24, name: "BAB 2", mata_pelajaran_id: 12 },
    ]);
    await queryInterface.bulkInsert("sub_babs", [
      { bab_id: 1, name: "SubBab 1.1", label_gratis: true },
      { bab_id: 1, name: "SubBab 1.2", label_gratis: false },
      { bab_id: 2, name: "SubBab 2.1", label_gratis: true },
      { bab_id: 2, name: "SubBab 2.2", label_gratis: false },
      { bab_id: 3, name: "SubBab 1.1", label_gratis: true },
      { bab_id: 3, name: "SubBab 1.2", label_gratis: false },
      { bab_id: 4, name: "SubBab 2.1", label_gratis: true },
      { bab_id: 4, name: "SubBab 2.2", label_gratis: false },
      { bab_id: 5, name: "SubBab 1.1", label_gratis: true },
      { bab_id: 5, name: "SubBab 1.2", label_gratis: false },
      { bab_id: 6, name: "SubBab 2.1", label_gratis: true },
      { bab_id: 6, name: "SubBab 2.2", label_gratis: false },
      { bab_id: 7, name: "SubBab 1.1", label_gratis: true },
      { bab_id: 7, name: "SubBab 1.2", label_gratis: false },
      { bab_id: 8, name: "SubBab 2.1", label_gratis: true },
      { bab_id: 8, name: "SubBab 2.2", label_gratis: false },
      { bab_id: 9, name: "SubBab 1.1", label_gratis: true },
      { bab_id: 9, name: "SubBab 1.2", label_gratis: false },
      { bab_id: 10, name: "SubBab 2.1", label_gratis: true },
      { bab_id: 10, name: "SubBab 2.2", label_gratis: false },
      { bab_id: 11, name: "SubBab 1.1", label_gratis: true },
      { bab_id: 11, name: "SubBab 1.2", label_gratis: false },
      { bab_id: 12, name: "SubBab 2.1", label_gratis: true },
      { bab_id: 12, name: "SubBab 2.2", label_gratis: false },
      { bab_id: 13, name: "SubBab 1.1", label_gratis: true },
      { bab_id: 13, name: "SubBab 1.2", label_gratis: false },
      { bab_id: 14, name: "SubBab 2.1", label_gratis: true },
      { bab_id: 14, name: "SubBab 2.2", label_gratis: false },
      { bab_id: 15, name: "SubBab 1.1", label_gratis: true },
      { bab_id: 15, name: "SubBab 1.2", label_gratis: false },
      { bab_id: 16, name: "SubBab 2.1", label_gratis: true },
      { bab_id: 16, name: "SubBab 2.2", label_gratis: false },
      { bab_id: 17, name: "SubBab 1.1", label_gratis: true },
      { bab_id: 17, name: "SubBab 1.2", label_gratis: false },
      { bab_id: 18, name: "SubBab 2.1", label_gratis: true },
      { bab_id: 18, name: "SubBab 2.2", label_gratis: false },
      { bab_id: 19, name: "SubBab 1.1", label_gratis: true },
      { bab_id: 19, name: "SubBab 1.2", label_gratis: false },
      { bab_id: 20, name: "SubBab 2.1", label_gratis: true },
      { bab_id: 20, name: "SubBab 2.2", label_gratis: false },
      { bab_id: 21, name: "SubBab 1.1", label_gratis: true },
      { bab_id: 21, name: "SubBab 1.2", label_gratis: false },
      { bab_id: 22, name: "SubBab 2.1", label_gratis: true },
      { bab_id: 22, name: "SubBab 2.2", label_gratis: false },
      { bab_id: 23, name: "SubBab 1.1", label_gratis: true },
      { bab_id: 23, name: "SubBab 1.2", label_gratis: false },
      { bab_id: 24, name: "SubBab 2.1", label_gratis: true },
      { bab_id: 24, name: "SubBab 2.2", label_gratis: false },
    ]);
    await queryInterface.bulkInsert("materials", [
      // SubBab 1
      {
        sub_bab_id: 1,
        jenis_material: "Video",
        name: "Video 1.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 1,
        jenis_material: "Video",
        name: "Video 1.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 1,
        jenis_material: "Single quiz",
        name: "Single Quiz 1.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 1,
        jenis_material: "Single quiz",
        name: "Single Quiz 1.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 1,
        jenis_material: "End quiz",
        name: "End Quiz 1",
      },
      { sub_bab_id: 1, jenis_material: "Summary", name: "Summary 1" },
      // SubBab 2
      {
        sub_bab_id: 2,
        jenis_material: "Video",
        name: "Video 2.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 2,
        jenis_material: "Video",
        name: "Video 2.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 2,
        jenis_material: "Single quiz",
        name: "Single Quiz 2.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 2,
        jenis_material: "Single quiz",
        name: "Single Quiz 2.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 2,
        jenis_material: "End quiz",
        name: "End Quiz 2",
      },
      { sub_bab_id: 2, jenis_material: "Summary", name: "Summary 2" },
      // SubBab 3
      {
        sub_bab_id: 3,
        jenis_material: "Video",
        name: "Video 3.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 3,
        jenis_material: "Video",
        name: "Video 3.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 3,
        jenis_material: "Single quiz",
        name: "Single Quiz 3.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 3,
        jenis_material: "Single quiz",
        name: "Single Quiz 3.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 3,
        jenis_material: "End quiz",
        name: "End Quiz 3",
      },
      { sub_bab_id: 3, jenis_material: "Summary", name: "Summary 3" },
      // SubBab 4
      {
        sub_bab_id: 4,
        jenis_material: "Video",
        name: "Video 4.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 4,
        jenis_material: "Video",
        name: "Video 4.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 4,
        jenis_material: "Single quiz",
        name: "Single Quiz 4.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 4,
        jenis_material: "Single quiz",
        name: "Single Quiz 4.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 4,
        jenis_material: "End quiz",
        name: "End Quiz 4",
      },
      { sub_bab_id: 4, jenis_material: "Summary", name: "Summary 4" },
      // SubBab 5
      {
        sub_bab_id: 5,
        jenis_material: "Video",
        name: "Video 5.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 5,
        jenis_material: "Video",
        name: "Video 5.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 5,
        jenis_material: "Single quiz",
        name: "Single Quiz 5.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 5,
        jenis_material: "Single quiz",
        name: "Single Quiz 5.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 5,
        jenis_material: "End quiz",
        name: "End Quiz 5",
      },
      { sub_bab_id: 5, jenis_material: "Summary", name: "Summary 5" },
      // SubBab 6
      {
        sub_bab_id: 6,
        jenis_material: "Video",
        name: "Video 6.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 6,
        jenis_material: "Video",
        name: "Video 6.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 6,
        jenis_material: "Single quiz",
        name: "Single Quiz 6.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 6,
        jenis_material: "Single quiz",
        name: "Single Quiz 6.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 6,
        jenis_material: "End quiz",
        name: "End Quiz 6",
      },
      { sub_bab_id: 6, jenis_material: "Summary", name: "Summary 6" },
      // SubBab 7
      {
        sub_bab_id: 7,
        jenis_material: "Video",
        name: "Video 7.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 7,
        jenis_material: "Video",
        name: "Video 7.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 7,
        jenis_material: "Single quiz",
        name: "Single Quiz 7.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 7,
        jenis_material: "Single quiz",
        name: "Single Quiz 7.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 7,
        jenis_material: "End quiz",
        name: "End Quiz 7",
      },
      { sub_bab_id: 7, jenis_material: "Summary", name: "Summary 7" },
      // SubBab 8
      {
        sub_bab_id: 8,
        jenis_material: "Video",
        name: "Video 8.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 8,
        jenis_material: "Video",
        name: "Video 8.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 8,
        jenis_material: "Single quiz",
        name: "Single Quiz 8.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 8,
        jenis_material: "Single quiz",
        name: "Single Quiz 8.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 8,
        jenis_material: "End quiz",
        name: "End Quiz 8",
      },
      { sub_bab_id: 8, jenis_material: "Summary", name: "Summary 8" },
      // SubBab 9
      {
        sub_bab_id: 9,
        jenis_material: "Video",
        name: "Video 9.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 9,
        jenis_material: "Video",
        name: "Video 9.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 9,
        jenis_material: "Single quiz",
        name: "Single Quiz 9.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 9,
        jenis_material: "Single quiz",
        name: "Single Quiz 9.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 9,
        jenis_material: "End quiz",
        name: "End Quiz 9",
      },
      { sub_bab_id: 9, jenis_material: "Summary", name: "Summary 9" },
      // SubBab 10
      {
        sub_bab_id: 10,
        jenis_material: "Video",
        name: "Video 10.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 10,
        jenis_material: "Video",
        name: "Video 10.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 10,
        jenis_material: "Single quiz",
        name: "Single Quiz 10.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 10,
        jenis_material: "Single quiz",
        name: "Single Quiz 10.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 10,
        jenis_material: "End quiz",
        name: "End Quiz 10",
      },
      {
        sub_bab_id: 10,
        jenis_material: "Summary",
        name: "Summary 10",
      },
      // SubBab 11
      {
        sub_bab_id: 11,
        jenis_material: "Video",
        name: "Video 11.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 11,
        jenis_material: "Video",
        name: "Video 11.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 11,
        jenis_material: "Single quiz",
        name: "Single Quiz 11.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 11,
        jenis_material: "Single quiz",
        name: "Single Quiz 11.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 11,
        jenis_material: "End quiz",
        name: "End Quiz 11",
      },
      {
        sub_bab_id: 11,
        jenis_material: "Summary",
        name: "Summary 11",
      },
      // SubBab 12
      {
        sub_bab_id: 12,
        jenis_material: "Video",
        name: "Video 12.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 12,
        jenis_material: "Video",
        name: "Video 12.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 12,
        jenis_material: "Single quiz",
        name: "Single Quiz 12.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 12,
        jenis_material: "Single quiz",
        name: "Single Quiz 12.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 12,
        jenis_material: "End quiz",
        name: "End Quiz 12",
      },
      {
        sub_bab_id: 12,
        jenis_material: "Summary",
        name: "Summary 12",
      },
      // SubBab 13
      {
        sub_bab_id: 13,
        jenis_material: "Video",
        name: "Video 13.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 13,
        jenis_material: "Video",
        name: "Video 13.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 13,
        jenis_material: "Single quiz",
        name: "Single Quiz 13.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 13,
        jenis_material: "Single quiz",
        name: "Single Quiz 13.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 13,
        jenis_material: "End quiz",
        name: "End Quiz 13",
      },
      {
        sub_bab_id: 13,
        jenis_material: "Summary",
        name: "Summary 13",
      },
      // SubBab 14
      {
        sub_bab_id: 14,
        jenis_material: "Video",
        name: "Video 14.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 14,
        jenis_material: "Video",
        name: "Video 14.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 14,
        jenis_material: "Single quiz",
        name: "Single Quiz 14.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 14,
        jenis_material: "Single quiz",
        name: "Single Quiz 14.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 14,
        jenis_material: "End quiz",
        name: "End Quiz 14",
      },
      {
        sub_bab_id: 14,
        jenis_material: "Summary",
        name: "Summary 14",
      },
      // SubBab 15
      {
        sub_bab_id: 15,
        jenis_material: "Video",
        name: "Video 15.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 15,
        jenis_material: "Video",
        name: "Video 15.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 15,
        jenis_material: "Single quiz",
        name: "Single Quiz 15.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 15,
        jenis_material: "Single quiz",
        name: "Single Quiz 15.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 15,
        jenis_material: "End quiz",
        name: "End Quiz 15",
      },
      {
        sub_bab_id: 15,
        jenis_material: "Summary",
        name: "Summary 15",
      },
      // SubBab 16
      {
        sub_bab_id: 16,
        jenis_material: "Video",
        name: "Video 16.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 16,
        jenis_material: "Video",
        name: "Video 16.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 16,
        jenis_material: "Single quiz",
        name: "Single Quiz 16.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 16,
        jenis_material: "Single quiz",
        name: "Single Quiz 16.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 16,
        jenis_material: "End quiz",
        name: "End Quiz 16",
      },
      {
        sub_bab_id: 16,
        jenis_material: "Summary",
        name: "Summary 16",
      },
      // SubBab 17
      {
        sub_bab_id: 17,
        jenis_material: "Video",
        name: "Video 17.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 17,
        jenis_material: "Video",
        name: "Video 17.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 17,
        jenis_material: "Single quiz",
        name: "Single Quiz 17.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 17,
        jenis_material: "Single quiz",
        name: "Single Quiz 17.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 17,
        jenis_material: "End quiz",
        name: "End Quiz 17",
      },
      {
        sub_bab_id: 17,
        jenis_material: "Summary",
        name: "Summary 17",
      },
      // SubBab 18
      {
        sub_bab_id: 18,
        jenis_material: "Video",
        name: "Video 18.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 18,
        jenis_material: "Video",
        name: "Video 18.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 18,
        jenis_material: "Single quiz",
        name: "Single Quiz 18.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 18,
        jenis_material: "Single quiz",
        name: "Single Quiz 18.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 18,
        jenis_material: "End quiz",
        name: "End Quiz 18",
      },
      {
        sub_bab_id: 18,
        jenis_material: "Summary",
        name: "Summary 18",
      },
      // SubBab 19
      {
        sub_bab_id: 19,
        jenis_material: "Video",
        name: "Video 19.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 19,
        jenis_material: "Video",
        name: "Video 19.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 19,
        jenis_material: "Single quiz",
        name: "Single Quiz 19.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 19,
        jenis_material: "Single quiz",
        name: "Single Quiz 19.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 19,
        jenis_material: "End quiz",
        name: "End Quiz 19",
      },
      {
        sub_bab_id: 19,
        jenis_material: "Summary",
        name: "Summary 19",
      },
      // SubBab 20
      {
        sub_bab_id: 20,
        jenis_material: "Video",
        name: "Video 20.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 20,
        jenis_material: "Video",
        name: "Video 20.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 20,
        jenis_material: "Single quiz",
        name: "Single Quiz 20.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 20,
        jenis_material: "Single quiz",
        name: "Single Quiz 20.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 20,
        jenis_material: "End quiz",
        name: "End Quiz 20",
      },
      {
        sub_bab_id: 20,
        jenis_material: "Summary",
        name: "Summary 20",
      },
      // SubBab 21
      {
        sub_bab_id: 21,
        jenis_material: "Video",
        name: "Video 21.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 21,
        jenis_material: "Video",
        name: "Video 21.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 21,
        jenis_material: "Single quiz",
        name: "Single Quiz 21.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 21,
        jenis_material: "Single quiz",
        name: "Single Quiz 21.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 21,
        jenis_material: "End quiz",
        name: "End Quiz 21",
      },
      {
        sub_bab_id: 21,
        jenis_material: "Summary",
        name: "Summary 21",
      },
      // SubBab 22
      {
        sub_bab_id: 22,
        jenis_material: "Video",
        name: "Video 22.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 22,
        jenis_material: "Video",
        name: "Video 22.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 22,
        jenis_material: "Single quiz",
        name: "Single Quiz 22.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 22,
        jenis_material: "Single quiz",
        name: "Single Quiz 22.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 22,
        jenis_material: "End quiz",
        name: "End Quiz 22",
      },
      {
        sub_bab_id: 22,
        jenis_material: "Summary",
        name: "Summary 22",
      },
      // SubBab 23
      {
        sub_bab_id: 23,
        jenis_material: "Video",
        name: "Video 23.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 23,
        jenis_material: "Video",
        name: "Video 23.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 23,
        jenis_material: "Single quiz",
        name: "Single Quiz 23.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 23,
        jenis_material: "Single quiz",
        name: "Single Quiz 23.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 23,
        jenis_material: "End quiz",
        name: "End Quiz 23",
      },
      {
        sub_bab_id: 23,
        jenis_material: "Summary",
        name: "Summary 23",
      },
      // SubBab 24
      {
        sub_bab_id: 24,
        jenis_material: "Video",
        name: "Video 24.1",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 24,
        jenis_material: "Video",
        name: "Video 24.2",
        xp: 125,
        gold: 10,
      },
      {
        sub_bab_id: 24,
        jenis_material: "Single quiz",
        name: "Single Quiz 24.1",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 24,
        jenis_material: "Single quiz",
        name: "Single Quiz 24.2",
        xp: 50,
        gold: 50,
      },
      {
        sub_bab_id: 24,
        jenis_material: "End quiz",
        name: "End Quiz 24",
      },
      {
        sub_bab_id: 24,
        jenis_material: "Summary",
        name: "Summary 24",
      },
    ]);
    await queryInterface.bulkInsert("user_progresses", [
      {
        user_id: 1,
        material_id: 1,
        selesai: true,
      },
      {
        user_id: 1,
        material_id: 2,
        selesai: true,
      },
      {
        user_id: 1,
        material_id: 3,
        selesai: false,
      },
      {
        user_id: 2,
        material_id: 1,
        selesai: true,
      },
      {
        user_id: 2,
        material_id: 2,
        selesai: true,
      },
      {
        user_id: 2,
        material_id: 3,
        selesai: true,
      },
      {
        user_id: 3,
        material_id: 1,
        selesai: true,
      },
      {
        user_id: 3,
        material_id: 2,
        selesai: true,
      },
      {
        user_id: 3,
        material_id: 3,
        selesai: true,
      },
      {
        user_id: 4,
        material_id: 13,
        selesai: true,
      },
      {
        user_id: 4,
        material_id: 14,
        selesai: true,
      },
      {
        user_id: 4,
        material_id: 15,
        selesai: true,
      },
      {
        user_id: 4,
        material_id: 16,
        selesai: true,
      },
      {
        user_id: 4,
        material_id: 17,
        selesai: true,
      },
      {
        user_id: 4,
        material_id: 18,
        selesai: true,
      },
    ]);
  },
  /**
   * @param {import('sequelize').QueryInterface} _queryInterface
   * @param {import('sequelize').Sequelize} _Sequelize
   */
  async down(_queryInterface, _Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
