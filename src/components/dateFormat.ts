const dateFormat = (startDate: any) => {
    const date = new Date(startDate);
    return date.toLocaleDateString("en-US", {year: 'numeric', month: 'long' });
}

export default dateFormat;