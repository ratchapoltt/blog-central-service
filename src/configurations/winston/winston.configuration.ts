import { environment } from "@environment";

import DailyRotateFile from "winston-daily-rotate-file";

import stringFormat from "string-format";

import * as winston from "winston";

const levels: winston.config.AbstractConfigSetLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  verbose: 4,
  debug: 5
};

const colors: Record<string, string> = {
  fatal: "red bold",
  error: "red",
  warn: "yellow",
  info: "green",
  verbose: "cyan",
  debug: "blue"
};

const format: winston.Logform.Format = winston.format.combine(
  winston.format.errors({
    stack: ["local", "development", "sit", "uat", "test"].includes(environment.profile)
  }),
  winston.format.timestamp({
    format: "DD/MM/YYYY hh:mm:ss A"
  }),
  winston.format.ms(),
  winston.format.colorize({
    all: true,
    colors
  }),
  winston.format.label({
    label: stringFormat("{0} (v{1})", environment.application.name, environment.application.version),
    message: false
  }),
  winston.format.printf((data: winston.Logform.TransformableInfo): string => {
    return stringFormat(
      "{0} - {1}   {2} [{3}] {4} {5} {6}",
      data.label,
      data.timestamp,
      data.level,
      data.context,
      data.message,
      data.ms,
      data.stack !== null &&
        data.stack !== undefined &&
        data.stack !== "" &&
        Array.isArray(data.stack) &&
        data.stack.length > 1 &&
        data.stack.at(0) === undefined
        ? `\n${data.stack}`
        : ""
    );
  })
);

const transports: winston.transport[] = [
  new winston.transports.Console(),
  new DailyRotateFile({
    level: "info",
    dirname: environment.logger.stream.dirname,
    filename: "service-%DATE%-info",
    extension: ".log",
    datePattern: "YYYYMMDD",
    maxSize: "20m",
    maxFiles: "14d",
    zippedArchive: true,
    json: true,
    format: winston.format.combine(
      winston.format.uncolorize({
        level: true,
        message: true,
        raw: true
      }),
      winston.format.json()
    )
  }),
  new DailyRotateFile({
    level: "error",
    dirname: environment.logger.stream.dirname,
    filename: "service-%DATE%-error",
    extension: ".log",
    datePattern: "YYYYMMDD",
    maxSize: "20m",
    maxFiles: "14d",
    zippedArchive: true,
    json: true,
    format: winston.format.combine(
      winston.format.uncolorize({
        level: true,
        message: true,
        raw: true
      }),
      winston.format.json()
    )
  })
];

const configuration: winston.LoggerOptions = {
  levels,
  format,
  transports
};

export default configuration;
