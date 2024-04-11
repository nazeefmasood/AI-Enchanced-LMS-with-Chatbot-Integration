from flask import Blueprint

teacher_bp = Blueprint('admin', __name__)


@teacher_bp.route('/admin')
def list_teachers():
    return 'List of teachers'


@teacher_bp.route('/teachers/<int:teacher_id>')
def get_teacher(teacher_id):
    return f'Details of teacher with ID {teacher_id}'