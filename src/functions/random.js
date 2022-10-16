import { UserArray } from "../components/themePicker/users";

export function random() {
    const max = UserArray.length - 1;
    const min = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}