import { useImmer } from "use-immer";

export default function Form() {
  const [person, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e) {
    updatePerson((p) => {
      p.name = e.target.value;
    });
  }
  function handleTitleChange(e) {
    updatePerson((p) => {
      p.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson((p) => {
      p.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson((p) => {
      p.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <label>
        Name: <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:{" "}
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City: <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:{" "}
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i> by {person.name}
        <br />
        (location in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
