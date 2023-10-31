export const queries = {
    "customers_by_assistant": "SELECT * FROM UserForm",
    "update_customer": "UPDATE UserForm SET {variable} WHERE UserId = ?",
    "landlords_by_assistant": "SELECT * FROM landlord WHERE listing_developer = ?",
    "landlords_by_city": "SELECT * FROM landlord WHERE listingCity = ? ",
    "insert_matched_landlord": "INSERT INTO {table} SET {variable}",
    "insert_internal_landlord": "INSERT INTO {table} SET {variable}",
    "matched_landlords_by_customer": "SELECT * FROM {table} WHERE UserId = ?",
    "update_matched_landlord": "UPDATE {table} SET {variable} WHERE UserId = ? AND listingAdd = ?",
    "update_new_house": "UPDATE {table} SET {variable} WHERE UserId = ? AND listingId = ?",
    "delete_landlords": "DELETE FROM {table} WHERE UserId = ?",
    "delete_matched_landlords": "DELETE FROM {table} WHERE UserId = ? AND listingUrl = ?"
};