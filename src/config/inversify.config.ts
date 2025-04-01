import { Container } from "inversify";
import { IAuthServiceInterface } from "../interfaces/auth.interface";
import { AuthService } from "../services/auth.service";
import { AuthRoute } from "../routes/auth.route";
const container=new Container();
container.bind<IAuthServiceInterface>(AuthService).to(AuthService);
container.bind<AuthRoute>(AuthRoute).toSelf();
export { container };