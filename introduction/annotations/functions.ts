const add = (x: number, y: number): number => {
  return x + y;
};

// we should always use type annotations for the return value of functions. Otherwise typescript might not catch glaring errors;

const subtract = (x: number, y: number) => {
  x - y; // typescript assumes we meant to return void...
};

function divide(x: number, y: number): number {
  return x / y;
}

const logger = (message: string): void => {
  console.log(message);
};

const throwErr = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
  tempInCelsius: 22,
};

const logWeather = (forecast: {
  date: Date;
  weather: string;
  tempInCelsius: number;
}): void => {
  console.log(forecast.date);
};

logWeather(forecast);

const logWeatherES2015 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}) => {
  console.log(date);
  console.log(weather);
};

const { date, weather } = forecast;
logWeatherES2015({ date, weather });
