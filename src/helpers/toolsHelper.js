import Swal from 'sweetalert2'

export const showSuccess = (text) =>
  Swal.fire({ icon: 'success', title: 'Berhasil', text, timer: 1800, showConfirmButton: false })

export const showError = (text) => Swal.fire({ icon: 'error', title: 'Gagal', text })

export const confirmDelete = async (title) => {
  const result = await Swal.fire({
    icon: 'warning',
    title: 'Hapus artikel?',
    text: `Artikel "${title}" akan dihapus permanen.`,
    showCancelButton: true,
    confirmButtonText: 'Hapus',
    cancelButtonText: 'Batal',
  })
  return result.isConfirmed
}

export const formatDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '-'
