function Car_Details(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]) {
    const carInfo = {
        manufacturer,
        modelName,
        ...options.reduce((acc, option) => ({ ...acc, ...option }), {})
    };
    return carInfo;
}

// Call the function with required information and additional name-value pairs
const car = Car_Details("Toyota", "Camry", { color: "Silver", year: 2023, engine: "V6" });

console.log(car);
