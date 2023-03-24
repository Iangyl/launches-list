import { IRocket } from 'hooks/useGetRockets/useGetRockets.types';

export default (rockets: IRocket[]) =>
  rockets &&
  rockets.map((rocket) => {
    return { value: rocket.id, label: rocket.name };
  });
