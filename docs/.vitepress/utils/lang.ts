/*
 * @Author: qiye
 * @Date: 2021-10-19 18:05:20
 * @LastEditors: qiye
 * @LastEditTime: 2021-10-19 18:05:21
 * @Description: file content
 */
import fs from 'fs'
import path from 'path'

export const languages = fs.readdirSync(path.resolve(__dirname, '../crowdin'))

export const ensureLang = (lang: string) => `/${lang}`
