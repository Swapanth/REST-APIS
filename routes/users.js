import express from "express";

import {
  Getusers,
  Createuser,
  Getuserbyid,
  UpdateUser,
  DeleteUser,
} from "../controllers/users.js";

const router = express.Router();



router.get("/", Getusers);

router.get("/:id", Getuserbyid);

router.post("/", Createuser);

router.delete("/:id", DeleteUser);

router.patch("/:id", UpdateUser);

export default router;
