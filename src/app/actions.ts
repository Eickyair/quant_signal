'use server';

export async function joinWaitlist(_formData: FormData) {
  // This function is no longer used with Web3Forms, but kept for compatibility if needed.
  // Prisma dependency has been removed.
  console.log('joinWaitlist called (deprecated)');
  return { success: true, message: 'Function deprecated' };
}

export async function getWaitlistCount() {
  // Return a static count or fetch from another source
  return 500; 
}

