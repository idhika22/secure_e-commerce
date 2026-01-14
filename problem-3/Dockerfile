# -----------------------------
# Step 1: Build React (Vite) app
# -----------------------------
    FROM node:18-alpine AS build

    WORKDIR /app
    
    # Install dependencies
    COPY package*.json ./
    RUN npm install
    
    # Copy source code and build
    COPY . .
    RUN npm run build   # generates /dist
    
    
    # -----------------------------
    # Step 2: Serve with Nginx
    # -----------------------------
    FROM nginx:alpine
    
    # Copy build output
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # Copy custom nginx config
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # Expose port
    EXPOSE 80
    
    # Start nginx
    CMD ["nginx", "-g", "daemon off;"]
    