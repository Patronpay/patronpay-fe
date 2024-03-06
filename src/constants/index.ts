

/**
 * Server url constant
 */
const API_SERVER_URL = process.env.API_SERVER_URL! || "";


/**
 * Enums 
 */
const USER_TYPES = {
    PATRON: "patron",
    FREELANCER: "freelancer",
    ADMIN: "admin",
  } as const;
  
  export { USER_TYPES, API_SERVER_URL };
  