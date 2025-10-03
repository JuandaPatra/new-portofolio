# Gunakan Node.js 18 LTS sebagai base

FROM node:18

# Set working directory

WORKDIR /app

# Copy package.json dan package-lock.json untuk cache install dependencies

COPY package*.json ./

# Install dependencies (gunakan npm atau yarn sesuai project)

RUN npm install

# Copy semua source code

COPY . .

# Expose port React dev server

EXPOSE 3000

# Jalankan React development server

CMD ["npm", "start"]
