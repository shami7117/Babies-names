import { log } from "console";
import { NextApiRequest } from "next";
import requestIp from "request-ip";

export const getIpAddress = (req: NextApiRequest): any => {
  const clientIp = requestIp.getClientIp(req);
  // If you're behind a proxy or load balancer, the IP address may be
  // in a different format. Use the following line to normalize the IP
  // address:
  // const normalizedIp = clientIp.replace(/::ffff:/, '');
  console.log(clientIp);
  return clientIp;
};
