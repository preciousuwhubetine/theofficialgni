import axios from "axios";

const images = [
  // '/hero-section-bg-1.png',
]

export const run = async () => {
  const promises = [];

  images.forEach((i) => promises.push(
    new Promise((resolve) => {
      resolve(axios.get(i))
    })
  ))

  await Promise.all(promises);
}
