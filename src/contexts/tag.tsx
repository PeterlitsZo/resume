import { Accessor, createContext, createSignal, ParentProps, Setter, useContext } from "solid-js";

type Tag = 'backend' | 'frontend';

type TagContextValue = [Accessor<Tag>, Setter<Tag>];

interface TagProviderProps {
  tag: Tag;
}

const TagContext = createContext<TagContextValue>();

export const TagProvider = (props: ParentProps<TagProviderProps>) => {
  const [tag, setTag] = createSignal(props.tag);

  return (
    <TagContext.Provider value={[tag, setTag]}>
      {props.children}
    </TagContext.Provider>
  );
}

export const useTag = () => {
  return useContext(TagContext)!;
}