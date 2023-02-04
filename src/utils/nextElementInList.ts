export const names: string[] = ["Build", "Create", "Design", "Develop"];

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