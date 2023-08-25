export const names: string[] = ["Build", "Create", "Design", "Develop"];

export const colors: string[] = ["bg-corered", "bg-yellow-400", "bg-blue-400", "bg-green-400"];

export const avatars: string[] = ["avatar1", "avatar2", "avatar3", "avatar4"];

export const nextElementInList = (
    list: string[],
    value: string,
    setCurrentName: any
) => { 
    const currentValueIndex = list.indexOf(value);
    const nextValueIndex = (currentValueIndex + 1) % list.length;
    const nextValue = list[nextValueIndex];
    setCurrentName(nextValue)
    return nextValue;
  };