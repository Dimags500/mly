import { StartFirebase } from "../config/firebase";
import { get, remove, set, ref, onValue, update } from "firebase/database";

const db = StartFirebase();

export const createItem = (id, data) => {
  set(ref(db, `/ids/"${id} `), {
    id: data.id,
  })
    .then(() => {
      console.log("firebase all good ");
    })
    .catch((error) => console.log("firebase error" + error));
};

export async function getAllItems() {
  const dbref = ref(db, "/ids");
  let records = [];

  try {
    onValue(dbref, (snapshot) => {
      console.log(snapshot);
      snapshot.forEach((item) => {
        // let key = item.key;
        let data = item.val();
        records.push({ data: data });
      });
    });

    return records;
  } catch (error) {
    console.log(error);
  }
}
