import SubTitle from "components/common/SubTitle";
import Title from "components/common/Title";
import {
  MainContainer,
  Card,
  Paragraph,
  CardContainer,
} from "./NotesStyled/NotesStyled";

const notes = [
  {
    title: "Nota 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam quam, maxime culpa deleniti autem iure explicabo, nobis laudantium illo sapiente voluptatem qui ducimus nisi officiis debitis facere ad exercitationem.",
  },
  {
    title: "Nota 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam quam, maxime culpa deleniti autem iure explicabo, nobis laudantium illo sapiente voluptatem qui ducimus nisi officiis debitis facere ad exercitationem.",
  },
  {
    title: "Nota 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam quam, maxime culpa deleniti autem iure explicabo, nobis laudantium illo sapiente voluptatem qui ducimus nisi officiis debitis facere ad exercitationem.",
  },
  {
    title: "Nota 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam quam, maxime culpa deleniti autem iure explicabo, nobis laudantium illo sapiente voluptatem qui ducimus nisi officiis debitis facere ad exercitationem.",
  },
  {
    title: "Nota 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam quam, maxime culpa deleniti autem iure explicabo, nobis laudantium illo sapiente voluptatem qui ducimus nisi officiis debitis facere ad exercitationem.",
  },
  {
    title: "Nota 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam quam, maxime culpa deleniti autem iure explicabo, nobis laudantium illo sapiente voluptatem qui ducimus nisi officiis debitis facere ad exercitationem.",
  },
  {
    title: "Nota 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam quam, maxime culpa deleniti autem iure explicabo, nobis laudantium illo sapiente voluptatem qui ducimus nisi officiis debitis facere ad exercitationem.",
  },
];
export default function Notes() {
  return (
    <MainContainer className="my-4">
      <Title text="Mis Notas" />
      <CardContainer className="mt-4">
        {notes.map((el, index) => {
          return (
            <Card key={index}>
              <SubTitle text={el.title} />
              <Paragraph>{el.description}</Paragraph>
            </Card>
          );
        })}
      </CardContainer>
    </MainContainer>
  );
}
