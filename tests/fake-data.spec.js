import { test, expect } from '@playwright/test';

const URL = 'http://127.0.0.1:5501/';

test('CPR vises', async ({ page }) => {
  await page.goto(URL);

  await page.locator('#chkPartialOptions').click();
  await page.locator('#cmbPartialOptions').selectOption('cpr');
  await page.getByRole('button', { name: 'Generate' }).click();

  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('.cprValue').first()).toBeVisible();
});

test('Name and gender vises', async ({ page }) => {
  await page.goto(URL);

  await page.locator('#chkPartialOptions').click();
  await page.locator('#cmbPartialOptions').selectOption('name-gender');
  await page.getByRole('button', { name: 'Generate' }).click();

  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('.firstNameValue').first()).toBeVisible();
  await expect(page.locator('.lastNameValue').first()).toBeVisible();
  await expect(page.locator('.genderValue').first()).toBeVisible();
});

test('Name, gender and birthdate vises', async ({ page }) => {
  await page.goto(URL);

  await page.locator('#chkPartialOptions').click();
  await page.locator('#cmbPartialOptions').selectOption('name-gender-dob');
  await page.getByRole('button', { name: 'Generate' }).click();

  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('.firstNameValue').first()).toBeVisible();
  await expect(page.locator('.lastNameValue').first()).toBeVisible();
  await expect(page.locator('.genderValue').first()).toBeVisible();
  await expect(page.locator('.dobValue').first()).toBeVisible();
});

test('CPR, name and gender vises', async ({ page }) => {
  await page.goto(URL);

  await page.locator('#chkPartialOptions').click();
  await page.locator('#cmbPartialOptions').selectOption('cpr-name-gender');
  await page.getByRole('button', { name: 'Generate' }).click();

  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('.cprValue').first()).toBeVisible();
  await expect(page.locator('.firstNameValue').first()).toBeVisible();
  await expect(page.locator('.lastNameValue').first()).toBeVisible();
  await expect(page.locator('.genderValue').first()).toBeVisible();
});

test('CPR, name, gender and birthdate vises', async ({ page }) => {
  await page.goto(URL);

  await page.locator('#chkPartialOptions').click();
  await page.locator('#cmbPartialOptions').selectOption('cpr-name-gender-dob');
  await page.getByRole('button', { name: 'Generate' }).click();

  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('.cprValue').first()).toBeVisible();
  await expect(page.locator('.firstNameValue').first()).toBeVisible();
  await expect(page.locator('.lastNameValue').first()).toBeVisible();
  await expect(page.locator('.genderValue').first()).toBeVisible();
  await expect(page.locator('.dobValue').first()).toBeVisible();
});

test('Address vises', async ({ page }) => {
  await page.goto(URL);

  await page.locator('#chkPartialOptions').click();
  await page.locator('#cmbPartialOptions').selectOption('address');
  await page.getByRole('button', { name: 'Generate' }).click();

  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('.streetValue').first()).toBeVisible();
  await expect(page.locator('.townValue').first()).toBeVisible();
});

test('Phone number vises', async ({ page }) => {
  await page.goto(URL);

  await page.locator('#chkPartialOptions').click();
  await page.locator('#cmbPartialOptions').selectOption('phone');
  await page.getByRole('button', { name: 'Generate' }).click();

  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('.phoneNumberValue').first()).toBeVisible();
});

test('Flere personer vises', async ({ page }) => {
  await page.goto(URL);

  await page.locator('#chkPerson').click();
  await page.locator('#txtNumberPersons').fill('3');
  await page.getByRole('button', { name: 'Generate' }).click();

  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('.personCard')).toHaveCount(3);
});